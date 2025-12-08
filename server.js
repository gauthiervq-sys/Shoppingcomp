#!/usr/bin/env node

/**
 * Shopping Comparison App - Backend Server
 * Optimized for Raspberry Pi 5
 */

const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

// Enable compression for better performance on Raspberry Pi
app.use(compression());

// Serve static files from the current directory
app.use(express.static(__dirname, {
    maxAge: '1d', // Cache static files for 1 day
    etag: true
}));

// Handle SPA routing - serve index.html for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).send('Internal Server Error');
});

// Start the server
const server = app.listen(PORT, HOST, () => {
    console.log('========================================');
    console.log('Shopping Comparison App - Backend Server');
    console.log('========================================');
    console.log(`Server running at http://${HOST}:${PORT}`);
    console.log(`Local access: http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server');
    console.log('========================================');
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received, closing server gracefully...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('\nSIGINT received, closing server gracefully...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});
