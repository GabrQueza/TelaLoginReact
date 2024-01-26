import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Controller, useForm } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

import logo from "./assets/react.svg";
import "./App.css";
import { Link } from "@mui/material";

export default function App() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const onErrorSubmit = (data) => {
    console.log(data);
  };

  return (
    <Grid
      container
      backgroundColor="#121214"
      height="100vh"
      flexDirection="center"
      justifyContent="center"
      alignContent="center"
    >
      <Grid
        item
        backgroundColor="#121214"
        flexDirection="center"
        justifyContent="center"
        alignItems="center"
        width="100%"
        maxWidth="400px"
      >
        <Box mb={2} display="flex" justifyContent="center" alignItems="center">
          <img
            src={logo}
            alt=""
            style={{ width: "100%", maxHeight: "140px" }}
          />
        </Box>

        <Typography
          variant="h1"
          fontFamily="'Inter', sans-serif"
          fontSize={32}
          color="#e1e1e6"
          fontWeight="bold"
          textAlign="center"
          mb={4}
        >
          Formulário de dados
        </Typography>

        <Grid
          container
          item
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Grid
            container
            item
            spacing={2}
            xs={12}
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Typography
              variant="subtitle1"
              fontFamily="'Inter', sans-serif"
              color="#e1e1e6"
              fontWeight="bold"
              textAlign="center"
              mb={4}
            >
              Faça o login e comece a usar!
            </Typography>

            <form
              onSubmit={handleSubmit(onSubmit, onErrorSubmit)}
              style={{ width: "100%" }}
            >
              {/*{errors && JSON.stringify(errors)}*/}
              <Grid item xs={12} mb={2}>
                <Controller
                  control={control}
                  name="email"
                  defaultValue=""
                  rules={{
                    required: "Obrigatório!",
                  }}
                  render={({ field: { ref, ...field } }) => (
                    <TextField
                      // sx={{
                      //   input: { color: "primary", backgroundColor: "red" },
                      // }}
                      {...field}
                      error={errors.email ? true : false}
                      variant="filled"
                      id="email"
                      label="Endereço de e-mail:"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon sx={{ color: "#7C7C8A" }} />
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                    />
                  )}
                />
                {errors.email?.message && (
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      color: "#d32f2f",
                    }}
                  >
                    Campo obrigatório!
                  </p>
                )}
              </Grid>

              <Grid item xs={12} mb={4}>
                <Controller
                  control={control}
                  name="password"
                  defaultValue=""
                  rules={{
                    required: "Obrigatório!",
                  }}
                  render={({ field: { ref, ...field } }) => (
                    <TextField
                      {...field}
                      error={errors.password ? true : false}
                      variant="filled"
                      id="password"
                      label="Senha:"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon sx={{ color: "#7C7C8A" }} />
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                    />
                  )}
                />
                {errors.password?.message && (
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      color: "#d32f2f",
                    }}
                  >
                    Campo obrigatório!
                  </p>
                )}
              </Grid>

              <Button
                variant="contained"
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 16,
                  textTransform: "capitalize",
                  width: "100%",
                }}
                type="submit"
              >
                Acesser plataforma
              </Button>

              <Grid
                item
                xs={12}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="1rem"
                mt={4}
              >
                <Link
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    color: "#7C7C8A",
                  }}
                >
                  Esqueceu sua senha?
                </Link>

                <Link
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    color: "#7C7C8A",
                  }}
                >
                  Não possui conta? Crie uma agora!
                </Link>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
