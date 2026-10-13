# -*- coding: utf-8 -*-
"""
Generate PWA icons for UNIOSUN CBT Arena
"""
from PIL import Image, ImageDraw, ImageFont
import os

def create_pwa_icon(target_size, path):
    scale = 4
    size = target_size * scale
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Premium rounded squircle background - UNIOSUN Royal Navy Blue
    radius = int(size * 0.22)
    draw.rounded_rectangle([0, 0, size, size], radius=radius, fill=(30, 58, 138, 255))
    
    # Inner gold border
    inset = int(size * 0.045)
    border_w = max(4, int(size * 0.022))
    draw.rounded_rectangle(
        [inset, inset, size - inset, size - inset],
        radius=radius - inset,
        outline=(245, 158, 11, 240),
        width=border_w
    )
    
    cx, cy = size // 2, size // 2
    
    # Academic Cap Diamond (White)
    w = int(size * 0.30)
    h = int(size * 0.14)
    cap_y = cy - int(size * 0.08)
    diamond = [
        (cx, cap_y - h),
        (cx + w, cap_y),
        (cx, cap_y + h),
        (cx - w, cap_y)
    ]
    draw.polygon(diamond, fill=(255, 255, 255, 255))
    
    # Skullcap (Gold)
    skull_w1 = int(w * 0.58)
    skull_w2 = int(w * 0.48)
    skull = [
        (cx - skull_w1, cap_y + int(h * 0.15)),
        (cx + skull_w1, cap_y + int(h * 0.15)),
        (cx + skull_w2, cap_y + int(size * 0.15)),
        (cx - skull_w2, cap_y + int(size * 0.15))
    ]
    draw.polygon(skull, fill=(245, 158, 11, 255))
    
    # Tassel ribbon (Gold right dangle)
    tassel = [
        (cx, cap_y - int(h * 0.2)),
        (cx + int(w * 0.85), cap_y + int(size * 0.05)),
        (cx + int(w * 0.85), cap_y + int(size * 0.18))
    ]
    draw.line(tassel, fill=(253, 224, 71, 255), width=max(3, int(size * 0.018)))
    
    # Open Book / Knowledge Wings at Base
    book_w = int(size * 0.26)
    book_y = cy + int(size * 0.18)
    book_h = int(size * 0.11)
    
    # Left page
    draw.rounded_rectangle(
        [cx - book_w, book_y, cx - int(size * 0.015), book_y + book_h],
        radius=int(size * 0.025),
        fill=(255, 255, 255, 250)
    )
    # Right page
    draw.rounded_rectangle(
        [cx + int(size * 0.015), book_y, cx + book_w, book_y + book_h],
        radius=int(size * 0.025),
        fill=(255, 255, 255, 250)
    )
    
    # High-quality Lanczos downsampling for ultra-crisp edges
    resampled = img.resize((target_size, target_size), Image.Resampling.LANCZOS)
    resampled.save(path, 'PNG', optimize=True)
    print(f"Generated {path} ({target_size}x{target_size})")

if __name__ == '__main__':
    create_pwa_icon(192, 'icon-192.png')
    create_pwa_icon(512, 'icon-512.png')
    create_pwa_icon(180, 'apple-touch-icon.png')
    create_pwa_icon(64, 'favicon.png')
