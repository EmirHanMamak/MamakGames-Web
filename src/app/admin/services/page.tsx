'use client'

import { useState, useEffect } from 'react'
import { AdminCard, FormField, TextInput, TextArea, SaveButton, DeleteButton, Toggle, Toast } from '@/components/admin/AdminUI'
import { getServiceItems, createServiceItem, updateServiceItem, deleteServiceItem } from '@/lib/actions'

const ICON_OPTIONS = ['Gamepad2', 'Smartphone', 'Globe', 'Zap', 'Code', 'Palette', 'Wrench', 'Rocket', 'Target', 'Layout']

export default function ServicesPage() {
  const [items, setItems] = useState<any[]>([])
  const [toast, setToast] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState({ icon: 'Gamepad2', title: '', description: '', sortOrder: 0, visible: true })

  const load = () => getServiceItems().then(setItems)
  useEffect(() => { load() }, [])

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    let result
    if (editingId) {
      result = await updateServiceItem(editingId, form)
    } else {
      result = await createServiceItem(form)
    }
    setForm({ icon: 'Gamepad2', title: '', description: '', sortOrder: items.length, visible: true })
    setEditingId(null)
    if (result.success) {
      setToast(editingId ? 'Service updated!' : 'Service added!')
      load()
    } else {
      setToast(`Error: ${result.error}`)
    }
    setTimeout(() => setToast(''), 3000)
  }

  const handleEdit = (item: any) => {
    setEditingId(item.id)
    setForm({ icon: item.icon, title: item.title, description: item.description, sortOrder: item.sortOrder, visible: item.visible ?? true })
  }

  const handleDelete = async (id: string) => {
    const result = await deleteServiceItem(id)
    if (result.success) {
      setToast('Service deleted')
      await load()
    } else {
      setToast(`Error: ${result.error}`)
    }
    setTimeout(() => setToast(''), 3000)
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-xl font-semibold text-white">Services</h2>

      {/* List */}
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between px-4 py-3 rounded-lg bg-[#111] border border-white/[0.06]">
            <div>
              <span className="text-sm text-white font-medium">{item.title}</span>
              <span className="text-xs text-white/30 ml-2">({item.icon})</span>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => handleEdit(item)} className="text-xs text-white/40 hover:text-white">Edit</button>
              <DeleteButton onDelete={() => handleDelete(item.id)} />
            </div>
          </div>
        ))}
      </div>

      {/* Form */}
      <AdminCard>
        <h3 className="text-sm font-medium text-white/70 mb-4">{editingId ? 'Edit Service' : 'Add Service'}</h3>
        <form onSubmit={handleSave} className="space-y-4">
          <FormField label="Icon">
            <select
              value={form.icon}
              onChange={e => setForm(p => ({ ...p, icon: e.target.value }))}
              className="w-full px-4 py-2.5 rounded-lg bg-[#111] border border-white/[0.08] text-white text-sm focus:border-[#b30000]/40 focus:outline-none"
            >
              {ICON_OPTIONS.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
          </FormField>
          <FormField label="Title">
            <TextInput value={form.title} onChange={v => setForm(p => ({ ...p, title: v }))} required />
          </FormField>
          <FormField label="Description">
            <TextArea value={form.description} onChange={v => setForm(p => ({ ...p, description: v }))} rows={3} />
          </FormField>
          <FormField label="Sort Order">
            <TextInput type="number" value={String(form.sortOrder)} onChange={v => setForm(p => ({ ...p, sortOrder: parseInt(v) || 0 }))} />
          </FormField>
          <Toggle label="Visible on Landing Page" checked={form.visible} onChange={v => setForm(p => ({ ...p, visible: v }))} />
          <div className="flex gap-3">
            <SaveButton loading={false} label={editingId ? 'Update' : 'Add Service'} />
            {editingId && (
              <button type="button" onClick={() => { setEditingId(null); setForm({ icon: 'Gamepad2', title: '', description: '', sortOrder: items.length, visible: true }) }} className="px-4 py-2 text-sm text-white/40 hover:text-white">Cancel</button>
            )}
          </div>
        </form>
      </AdminCard>
      {toast && <Toast message={toast} />}
    </div>
  )
}
