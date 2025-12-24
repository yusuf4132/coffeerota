/*import React from 'react';
import menu from '../data/menu';

const MenuList = ({ type }) => {

  return (
    <div className="menu-list">{[...menu].filter(menuItem => menuItem.type === type).map(menuItem => {
      return <div className="menu-item" key={menuItem.id}>
        <span className="item-name">{menuItem.itemName}</span>
        <span className="price">{menuItem.price}</span>
      </div>
    })}</div>
  );
}

export default MenuList;*/
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import React from "react";

const MenuList = ({ type }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      const { data, error } = await supabase
        .from("iso_menu")
        .select("*")
        .eq("type", type)
        .order("id", { ascending: true });

      if (error) {
        console.error("Menü çekme hatası:", error);
      } else {
        setItems(data);
      }
      setLoading(false);
    };

    fetchMenu();
  }, [type]);

  if (loading) return <p>Yükleniyor...</p>;

  return (
    <ul className="menu-list">
      {items.map((item) => (
        <li key={item.id} className="menu-item">
          <span className="item-name">{item.itemName}</span>
          <span className="item-price">{item.price}</span>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
