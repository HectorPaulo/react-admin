import { Card, CardContent, CardHeader } from "@mui/material";

export const Dashboard = () => (
    <Card>
        <CardHeader title="Bienvenido a la papuadministración" />
        <CardContent>
            <h3>¡Saludos a los papucamaradas!</h3>
        </CardContent>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img style={{ width: "400px" }} src="../../public/Assets/important-photo.png" alt="important" />
        </div>
    </Card>
);