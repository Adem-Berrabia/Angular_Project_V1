// src/app/not-found/not-found.component.ts
import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  template: `
    <main class="not-found-main">
      <div class="content">
        <h1>404</h1>
        <p>Oops! Page not found</p>
        <a routerLink="/">Go back home</a>

        <!-- Floating geometric shapes -->
        <div class="geometric-shapes">
          <div class="shape"></div>
          <div class="shape"></div>
          <div class="shape"></div>
          <div class="shape"></div>
        </div>

        <!-- Neural lines -->
        <div class="neural-lines">
          <div class="neural-line"></div>
          <div class="neural-line"></div>
          <div class="neural-line"></div>
        </div>
      </div>
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
        font-family: 'Segoe UI', sans-serif;
      }

      .not-found-main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: radial-gradient(circle at top left, #0f0f0f, #111);
        color: #fff;
        overflow: hidden;
        position: relative;
      }

      .content {
        text-align: center;
        z-index: 10;
      }

      .content h1 {
        font-size: 8rem;
        margin: 0;
        color: #00bfff;
        text-shadow: 0 0 20px #00bfff, 0 0 40px #00bfff;
      }

      .content p {
        font-size: 1.5rem;
        margin: 1rem 0;
        color: #ccc;
      }

      .content a {
        display: inline-block;
        margin-top: 1rem;
        padding: 0.7rem 1.5rem;
        background: #00bfff;
        color: #111;
        font-weight: bold;
        text-decoration: none;
        border-radius: 8px;
        transition: 0.3s;
      }

      .content a:hover {
        background: #0095cc;
        box-shadow: 0 0 15px #00bfff;
      }

      /* Geometric shapes */
      .geometric-shapes {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }

      .geometric-shapes .shape {
        position: absolute;
        width: 50px;
        height: 50px;
        border: 2px solid #00bfff;
        background: transparent;
        animation: float 8s infinite;
        border-radius: 10px;
      }

      .geometric-shapes .shape:nth-child(1) {
        top: 10%;
        left: 15%;
        animation-delay: 0s;
      }
      .geometric-shapes .shape:nth-child(2) {
        top: 30%;
        left: 80%;
        animation-delay: 2s;
      }
      .geometric-shapes .shape:nth-child(3) {
        top: 70%;
        left: 20%;
        animation-delay: 4s;
      }
      .geometric-shapes .shape:nth-child(4) {
        top: 50%;
        left: 50%;
        animation-delay: 6s;
      }

      @keyframes float {
        0% {
          transform: translateY(0) rotate(0deg);
        }
        50% {
          transform: translateY(-30px) rotate(180deg);
        }
        100% {
          transform: translateY(0) rotate(360deg);
        }
      }

      /* Neural lines */
      .neural-lines {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }

      .neural-lines .neural-line {
        position: absolute;
        width: 2px;
        height: 100px;
        background: linear-gradient(to top, #00bfff, transparent);
        animation: line-move 4s infinite alternate;
      }

      .neural-lines .neural-line:nth-child(1) {
        left: 20%;
        top: 10%;
        animation-delay: 0s;
      }
      .neural-lines .neural-line:nth-child(2) {
        left: 50%;
        top: 50%;
        animation-delay: 1s;
      }
      .neural-lines .neural-line:nth-child(3) {
        left: 80%;
        top: 20%;
        animation-delay: 2s;
      }

      @keyframes line-move {
        0% {
          transform: translateY(0);
          opacity: 0.5;
        }
        50% {
          transform: translateY(30px);
          opacity: 1;
        }
        100% {
          transform: translateY(0);
          opacity: 0.5;
        }
      }
    `,
  ],
})
export class NotFoundComponent {}
