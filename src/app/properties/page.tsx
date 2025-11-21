'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default function PropertiesPage() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    loadProperties();
  }, []);

  async function loadProperties() {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) setProperties(data);
    else console.error('Error loading properties:', error);
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Properties</h1>

      <Link href="/properties/new" style={{ display: 'block', marginBottom: 20 }}>
        ➕ Add New Property
      </Link>

      {properties.length === 0 ? (
        <p>No properties yet.</p>
      ) : (
        <ul>
          {properties.map((p) => (
            <li key={p.id}>{p.nickname}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
