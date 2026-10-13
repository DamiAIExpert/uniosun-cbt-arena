# -*- coding: utf-8 -*-
"""
Generate PWA icons for UNIOSUN CBT Arena
"""
from PIL import Image, ImageDraw, ImageFont
import os

def create_pwa_icon(size, path):
    img = Image.new('RGBA', (size, size), (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    
    # Rounded background with emerald gradient simulation
    radius = int(size * 0.22)
    # Background squircle
    draw.rounded_rectangle([0, 0, size, size], radius=radius, fill=(5, 150, 105, 255))
    
    # Inner border / ring
    inset = int(size * 0.04)
    draw.rounded_rectangle([inset, inset, size - inset, size - inset], radius=radius - inset, outline=(245, 158, 11, 255), width=max(2, int(size * 0.02)))
    
    # Draw simple academic icon (Graduation cap silhouette & book)
    cx, cy = size // 2, size // 2
    
    # Cap diamond top
    w = int(size * 0.32)
    h = int(size * 0.16)
    pts = [
        (cx, cy - h - int(size * 0.05)),
        (cx + w, cy - int(size * 0.05)),
        (cx, cy + h - int(size * 0.05)),
        (cx - w, cy - int(size * 0.05))
    ]
    draw.polygon(pts, fill=(255, 255, 255, 255))
    
    # Cap lower skullcap
    lower_pts = [
        (cx - int(w * 0.6), cy - int(size * 0.04)),
        (cx + int(w * 0.6), cy - int(size * 0.04)),
        (cx + int(w * 0.5), cy + int(size * 0.12)),
        (cx - int(w * 0.5), cy + int(size * 0.12))
    ]
    draw.polygon(lower_pts, fill=(245, 158, 11, 255))
    
    # Open book / scroll base
    book_w = int(size * 0.28)
    book_y = cy + int(size * 0.16)
    draw.rounded_rectangle(
        [cx - book_w, book_y, cx + book_w, book_y + int(size * 0.14)],
        radius=int(size * 0.03),
        fill=(255, 255, 255, 240)
    )
    
    img.save(path, 'PNG')
    print(f"Generated {path} ({size}x{size})")

if __name__ == '__main__':
    create_pwa_icon(192, 'icon-192.png')
    create_pwa_icon(512, 'icon-512.png')
    create_pwa_icon(180, 'apple-touch-icon.png')
    create_pwa_icon(64, 'favicon.png')
