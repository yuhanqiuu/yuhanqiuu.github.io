---
title: "Object-Detecting and Self-Balancing Mobile Robot"
order: 5

image: "/images/projects/ppg.png"

description: >
    A two-wheeled self-balancing robot capable of staying stable on flat surfaces and slopes up to 10°. Used CAD for mechanical design and C++ based PID control for balancing algorithm, and integrated real-time image processing with PyTorch and OpenCV to stream, detect, and classify common objects. Additionally, I created an iOS app using Flutter framework for Bluetooth remote control.

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
