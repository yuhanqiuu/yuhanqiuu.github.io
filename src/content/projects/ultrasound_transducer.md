---
title: "PPG Heart Rate Sensor Wearable"
order: 6

image: "/images/projects/ppg.png"

description: >
  Medical-grade photoplethysmography (PPG) wearable designed to detect pulse
  in patients undergoing cardiac arrest. The system integrates analog front-end
  signal conditioning, MCU-based processing, and wireless data transmission.

year: 2024
role: "Electrical Engineer"
stack:
  - Analog Front-End
  - Embedded C
  - ARM Cortex-M
  - Bluetooth Low Energy

link: "/projects/ppg-heart-rate"
---

## Overview

This project focuses on the design and implementation of a wearable
photoplethysmography (PPG) sensor system intended for continuous heart rate
monitoring in clinical environments.

## System Architecture

- Optical sensor and analog front-end (AFE) for PPG signal acquisition  
- MCU-based digital filtering and peak detection  
- Wireless data transmission via Bluetooth Low Energy  
- Battery-powered system with integrated charging and protection  

## Design Challenges

- Noise suppression under motion artifacts  
- Power consumption constraints for wearable operation  
- Reliable peak detection under low perfusion conditions  

## Results

The final prototype achieved stable heart rate detection across multiple test
subjects, with real-time data streaming to a mobile application.

## Notes

Certain design details are omitted or generalized to protect intellectual
property.
