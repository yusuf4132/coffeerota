import React from "react";
import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    Button,
    TextField,
    Box,
    IconButton,
    Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate=useNavigate();
    const [logoutLoading, setLogoutLoading] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [newItem, setNewItem] = useState({
        itemName: "",
        price: "",
        type: "",
    });

    const handleLogout = async () => { setLogoutLoading(true); const { error } = await supabase.auth.signOut(); setLogoutLoading(false); if (error) { console.error('Çıkış hatası:', error); setSnackbar({ open: true, message: 'Çıkış Yapılamadı!', severity: 'error', }); } else { navigate('/'); } };

    const [editId, setEditId] = useState(null);
    const [editData, setEditData] = useState({});

    const fetchMenu = async () => {
        const { data } = await supabase
            .from("iso_menu")
            .select("*")
            .order("id", { ascending: true });

        setMenu(data || []);
        setLoading(false);
    };

    useEffect(() => {
        fetchMenu();
    }, []);

    // EKLE
    const handleAdd = async () => {
        if (!newItem.itemName || !newItem.price || !newItem.type) return;

        await supabase.from("iso_menu").insert([newItem]);
        setNewItem({ itemName: "", price: "", type: "" });
        fetchMenu();
    };

    // SİL
    const handleDelete = async (id) => {
        if (!window.confirm("Silmek istediğine emin misin?")) return;

        await supabase.from("iso_menu").delete().eq("id", id);
        fetchMenu();
    };

    // GÜNCELLE
    const handleUpdate = async (id) => {
        await supabase.from("iso_menu").update(editData).eq("id", id);
        setEditId(null);
        fetchMenu();
    };

    if (loading) return <p>Yükleniyor...</p>;

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h5" mb={2}>
                Ürün Yönetimi
            </Typography>

            {/* EKLE */}
            <Paper sx={{ p: 2, mb: 3 }}>
                <Box display="flex" gap={2}>
                    <TextField
                        label="Ürün Adı"
                        value={newItem.itemName}
                        onChange={(e) =>
                            setNewItem({ ...newItem, itemName: e.target.value })
                        }
                        fullWidth
                    />
                    <TextField
                        label="Fiyat"
                        value={newItem.price}
                        onChange={(e) =>
                            setNewItem({ ...newItem, price: e.target.value })
                        }
                        fullWidth
                    />
                    <TextField
                        label="Tür"
                        value={newItem.type}
                        onChange={(e) =>
                            setNewItem({ ...newItem, type: e.target.value })
                        }
                        fullWidth
                    />
                    <Button variant="contained" onClick={handleAdd}>
                        Ekle
                    </Button>
                </Box>
            </Paper>

            {/* TABLO */}
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Ürün</TableCell>
                            <TableCell>Fiyat</TableCell>
                            <TableCell>Tür</TableCell>
                            <TableCell align="right">İşlem</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {menu.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>
                                    {editId === item.id ? (
                                        <TextField
                                            value={editData.itemName}
                                            onChange={(e) =>
                                                setEditData({ ...editData, itemName: e.target.value })
                                            }
                                        />
                                    ) : (
                                        item.itemName
                                    )}
                                </TableCell>

                                <TableCell>
                                    {editId === item.id ? (
                                        <TextField
                                            value={editData.price}
                                            onChange={(e) =>
                                                setEditData({ ...editData, price: e.target.value })
                                            }
                                        />
                                    ) : (
                                        item.price
                                    )}
                                </TableCell>

                                <TableCell>
                                    {editId === item.id ? (
                                        <TextField
                                            value={editData.type}
                                            onChange={(e) =>
                                                setEditData({ ...editData, type: e.target.value })
                                            }
                                        />
                                    ) : (
                                        item.type
                                    )}
                                </TableCell>

                                <TableCell align="right">
                                    {editId === item.id ? (
                                        <IconButton onClick={() => handleUpdate(item.id)}>
                                            <SaveIcon />
                                        </IconButton>
                                    ) : (
                                        <IconButton
                                            onClick={() => {
                                                setEditId(item.id);
                                                setEditData(item);
                                            }}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                    )}

                                    <IconButton
                                        color="error"
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
            <Button variant="contained" onClick={handleLogout} sx={{ mb: 2, backgroundColor: 'red', fontSize: '18px', width: '170px' ,marginLeft:'15px',marginTop:'20px'}}> Çıkış Yap </Button>
        </Box>
    );
}