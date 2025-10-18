import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
})
export class TimelineComponent {
  timelineItems = [
    {
      year: 2024,
      title: 'Genesis Protocol',
      text: 'NeuralGlass is a cutting-edge cyberpunk glassmorphism HTML template featuring a striking purple, pink, and green color palette with futuristic neural network aesthetics.',
    },
    {
      year: 2025,
      title: 'Matrix Integration',
      text: 'Built with pure HTML/CSS and vanilla JavaScript, it offers smooth scrolling, mobile-responsive navigation with hamburger menu, parallax effects, and dynamic visual elements that respond to user interaction.',
    },
    {
      year: 2026,
      title: 'Quantum Leap',
      text: 'This HTML CSS template is brought to you by TemplateMo website. Perfect for tech startups, AI companies, gaming platforms, or any project requiring a bold, futuristic web presence.',
    },
    {
      year: 2027,
      title: 'Neural Singularity',
      text: 'Human consciousness successfully merges with AI systems, creating hybrid intelligences that transcend biological limitations.',
    },
  ];
}
