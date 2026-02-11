'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
import CircularProgress from "@mui/material/CircularProgress";
// 🌌 Styled form container
const FormContainer = styled(Box)(({ theme }) => ({
    maxWidth: '450px',
    margin: 'auto',
    padding: '2rem',
    background: '#0f172a',
    borderRadius: '1rem',
    color: '#fff',
}));

// ✏️ Styled input field
const StyledInput = styled(TextField)({
    marginBottom: '1.2rem',
    '& .MuiInputBase-root': {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        color: '#fff',
        borderRadius: 8,
    },
    '& .MuiInputLabel-root': {
        color: '#ccc',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.1)',
        },
        '&:hover fieldset': {
            borderColor: '#60a5fa',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.1)',
        },
    },
});

// 🚀 Styled submit button
const SubmitButton = styled(Button)({
    background: 'linear-gradient(to right, #3b82f6, #9333ea)',
    color: 'white',
    padding: '0.8rem',
    borderRadius: '0.7rem',
    marginTop: '1rem',
    textTransform: 'none',
    fontWeight: 600,
    '&:hover': {
        background: 'linear-gradient(to right, #2563eb, #7e22ce)',
    },
});

const CustomForm = () => {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        setLoading(true);
        const now = new Date();
        const formattedTime = now.toISOString();
        try {
            const emailParams = {
                name: data?.name,
                email: data?.email,
                message: data?.description,
                time: formattedTime

        };


        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        const res = await emailjs.send(serviceID, templateID, emailParams, userID);

       
        if (res.status === 200) {
            toast.success("Message sent successfully 🚀");
            reset();
        }

    } catch (error) {
        console.error("EMAIL ERROR:", error);
        toast.error("Failed to send message ❌");
    } finally {
        setLoading(false);
    }
};

return (
    <form component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <StyledInput
            fullWidth
            // label="Name"
            placeholder="Your name"
            {...register('name', { required: 'Name is required' })}
            error={!!errors.name}
            helperText={errors.name?.message}
        />

        <StyledInput
            fullWidth
            // label="Email"
            placeholder="your.email@example.com"
            {...register('email', {
                required: 'Email is required',
                pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
        />

        <StyledInput
            fullWidth
            // label="Message"
            placeholder="Your message here..."
            multiline
            minRows={4}
            {...register('description', { required: 'Message is required' })}
            error={!!errors.description}
            helperText={errors.description?.message}
        />

        <SubmitButton fullWidth type="submit"
        endIcon={!loading && <SendIcon />}
         disabled={loading}
        >
           {loading ? (
        <CircularProgress size={22} sx={{ color: "white" }} />
        ) : (
        "Send Message"
            )}
        </SubmitButton>
    </form>
);
};

export default CustomForm;
