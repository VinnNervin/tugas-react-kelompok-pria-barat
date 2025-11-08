import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function About() {
  const members = [
    { id: 1, name: "Charles Lin", nim: "241130269" },
    { id: 2, name: "Stanley Sun", nim: "241130212" },
    { id: 3, name: "Leon yaputra", nim: "241130251" },
    { id: 4, name: "Leonardo Muliangga", nim: "241130726" },
  ];

  const initials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("");

  return (
    <Container
      maxWidth="md"
      sx={{
        py: 4,
        minHeight: "100vh",
        color: "white",
      }}
      style={{
        backgroundColor:
          "linear-gradient(180deg, rgba(16,24,40,1) 0%, rgba(30,41,57,1) 100%)",
      }}
    >
      <Box display="flex" alignItems="center" mb={2}>
        <IconButton aria-label="back" onClick={() => window.history.back()}>
          <ArrowBackIcon sx={{ color: "white" }} />
        </IconButton>
        <Typography variant="h4" component="h1" sx={{ ml: 1 }}>
          Tentang Kami
        </Typography>
      </Box>

      <Typography>Aplikasi Cuaca Sederhana - Proyek Tugas Kuliah</Typography>

      <Card
        sx={{
          mb: 3,
          backgroundColor: "var(--color-secondary)",
          color: "white",
        }}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Deskripsi Proyek
          </Typography>
          <Typography sx={{ color: "rgba(203,213,225,0.9)" }}>
            Aplikasi ini dibuat sebagai tugas kuliah untuk mempelajari React,
            komponen, state & props, hooks, dan routing menggunakan React
            Router. Data cuaca diambil dari OpenWeatherMap API berdasarkan nama
            kota.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ backgroundColor: "var(--color-secondary)", color: "white" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Anggota Kelompok
          </Typography>
          <Grid container spacing={2}>
            {members.map((member) => (
              <Grid item xs={12} sm={6} key={member.id}>
                <Card
                  variant="outlined"
                  sx={{
                    backgroundColor: "var(--color-secondary)",
                    color: "white",
                    borderColor: "rgba(255,255,255,0.06)",
                  }}
                >
                  <CardContent
                    sx={{ display: "flex", gap: 2, alignItems: "center" }}
                  >
                    <Avatar
                      sx={{ bgcolor: "var(--color-primary)", color: "white" }}
                    >
                      {initials(member.name)}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1">{member.name}</Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "rgba(203,213,225,0.9)" }}
                      >
                        {member.nim}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default About;
