/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('next').NextConfig} */

const nextConfig = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
});

module.exports = nextConfig;
