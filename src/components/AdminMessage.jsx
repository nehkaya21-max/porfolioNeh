import React ,{useState ,useEffect} from 'react';
import { Container , Table,Button } from 'react-bootstrap';
import AdminNavbar from './AdminNavbar'; // Importation

const AdminMessage = () => {
    const [messages, setMessages] = useState([]);

    // Fonction pour charger les messages
    const loadMessages = () => {
        fetch("http://localhost/portfolio_api/get_messages.php")
            .then(res => res.json())
            .then(data => setMessages(data))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        loadMessages();
    }, []);

    // Fonction pour supprimer
    const handleDelete = (id) => {
        if (window.confirm("Supprimer ce message définitivement ?")) {
            fetch("http://localhost/portfolio_api/delete_message.php", {
                method: "POST",
                body: JSON.stringify({ id: id }),
                headers: { "Content-Type": "application/json" }
            })
                .then(res => res.json())
                .then(data => {
                    alert(data.message);
                    loadMessages(); // On recharge la liste après suppression
                });
        }
    };
    return (
        <>
        <AdminNavbar />
        <Container className='py-5'>
            <h2 className='mb-4'>Gestion des messages</h2>
            <Table striped bordered hover responsive>
                <thead className='table-dark'>
                    <tr>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Sujet</th>
                        <th>Message</th>
                        <th>Date</th>
                    </tr>
                </thead>
                    <tbody>
                        {messages.map((msg)=>(
                            <tr key={msg.id}>
                                <td>{msg.name}</td>
                                <td>{msg.email}</td>
                                <td>{msg.subject}</td>
                                <td>{msg.message}</td>
                                <td>{new Date(msg.created_at).toLocaleDateString()}</td>
                                <td>
                                    <Button variant="danger" size="sm" onClick={() => handleDelete(msg.id)}>
                                        Supprimer
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
               
            </Table>
        </Container>
        </>
    );
}

export default AdminMessage;