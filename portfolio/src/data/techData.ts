// src/data/techData.ts

export const techStack = [
  { 
    category: "iot", 
    categoryLabel: "IoT & Embedded",
    tools: [
      { name: "C++", icon: "devicon-cplusplus-plain", color: "#00599C" },
      { name: "ESP32", icon: "devicon-arduino-plain", color: "#E7352C" },
      { name: "PlatformIO", color: "#f5822a", iconUrl: "https://cdn.simpleicons.org/platformio" },
      { name: "WiringPi", color: "#666666", svg: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9 2V4H15V2H17V4H21C21.55 4 22 4.45 22 5V21C22 21.55 21.55 22 21 22H3C2.45 22 2 21.55 2 21V5C2 4.45 2.45 4 3 4H7V2H9M11 19V15H9V19H11M15 19V15H13V19H15M7 19V15H5V19H7M19 19V15H17V19H19M7 13V9H5V13H7M11 13V9H9V13H11M15 13V9H13V13H15M19 13V9H17V13H19Z" /></svg>' },
      { name: "Raspberry Pi", icon: "devicon-raspberrypi-plain", color: "#C51A4A" }
    ] 
  },
  { 
    category: "backend", 
    categoryLabel: "Backend & Scripts",
    tools: [
      { name: "Python", icon: "devicon-python-plain", color: "#3776AB" },
      { name: "Node.js", icon: "devicon-nodejs-plain", color: "#339933" },
      { name: "Socket.io", icon: "devicon-socketio-original", color: "#010101" },
      { name: "FastAPI", icon: "devicon-fastapi-plain", color: "#009688" },
      { name: "Pandas", icon: "devicon-pandas-plain", color: "#150458" },
      { name: "NumPy", icon: "devicon-numpy-plain", color: "#013243" },
      { name: "Matplotlib", icon: "devicon-matplotlib-plain", color: "#11557C" },
      { name: "Google API", icon: "devicon-google-plain", color: "#4285F4" }
    ] 
  },
  { 
    category: "frontend", 
    categoryLabel: "Frontend & Mobile",
    tools: [
      { name: "React", icon: "devicon-react-original", color: "#61DAFB" },
      { name: "React Native", icon: "devicon-react-original", color: "#61DAFB" },
      { name: "Expo", color: "#000000", iconUrl: "https://cdn.simpleicons.org/expo" },
      { name: "TypeScript", icon: "devicon-typescript-plain", color: "#3178C6" },
      { name: "JavaScript", icon: "devicon-javascript-plain", color: "#F7DF1E" },
      { name: "HTML5", icon: "devicon-html5-plain", color: "#E34F26" },
      { name: "CSS3", icon: "devicon-css3-plain", color: "#1572B6" },
      { name: "Astro", icon: "devicon-astro-plain", color: "#FF5D01" },
      { name: "Tailwind", icon: "devicon-tailwindcss-original", color: "#06B6D4" },
      { name: "Leaflet", icon: "devicon-leaflet-plain", color: "#199900" },
    ] 
  },
  { 
    category: "database", 
    categoryLabel: "Bazy Danych",
    tools: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain", color: "#336791" },
      { name: "Prisma", icon: "devicon-prisma-original", color: "#2D3748" },
      { name: "Redis", icon: "devicon-redis-plain", color: "#DC382D" },
      { name: "SQLAlchemy", icon: "devicon-sqlalchemy-plain", color: "#D71F00" }
    ] 
  },
  { 
    category: "tools", 
    categoryLabel: "Narzędzia",
    tools: [
      { name: "Git", icon: "devicon-git-plain", color: "#F05032" },
      { name: "Docker", icon: "devicon-docker-plain", color: "#2496ED" },
      { name: "Linux", icon: "devicon-linux-plain", color: "#FCC624" },
      { name: "Figma", icon: "devicon-figma-plain", color: "#F24E1E" },
      { name: "Prettier", color: "#F7B93E", svg: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.003 1.98C6.473 1.98 1.98 6.473 1.98 12.003c0 5.53 4.493 10.023 10.023 10.023 5.53 0 10.023-4.493 10.023-10.023 0-5.53-4.493-10.023-10.023-10.023zm3.763 6.917c-.367.113-.537.283-.907.393-.197.057-2.66.71-3.283 1.703-.397.623.113 2.04 1.39 2.013.933-.03 2.38-.623 2.38-.623s-1.843 2.27-1.133 3.63c.483.937 1.503.737 1.503.737s-1.077-1.02-.737-1.813c.2-.453.933-1.103 2.097-1.277 1.36-.2 2.353-.367 2.353-1.927 0-1.503-1.163-2.353-1.87-2.61-.623-.223-1.42-.32-1.793-.227zM7.22 6.513s.653 2.667 3.033 3.007c.367.057.653-.03.653-.03s-1.277 2.723 1.107 4.567c.737.567 1.757.483 1.757.483s-1.447.653-2.127 2.353c-.34 1.05.34 2.153.34 2.153s-2.07-.653-2.977-2.61c-.567-1.247-.48-2.637-.48-2.637s-1.163.793-1.9 2.667c-.283.71-.283 1.587-.283 1.587s-.68-1.587-.253-3.007c.367-1.247 1.73-2.667 1.73-2.667s-1.503 1.333-2.61 1.73c-1.277.453-2.61-.17-2.61-.17s1.617-2.327 4.62-7.426z"/></svg>' },
      { name: "VS Code", icon: "devicon-vscode-plain", color: "#007ACC" }
    ] 
  },
  { 
    category: "future", 
    categoryLabel: "Planuję się nauczyć",
    tools: [
      { name: "Next.js", icon: "devicon-nextjs-plain", color: "#000000" },
      { name: "Go", icon: "devicon-go-original-wordmark", color: "#00ADD8" },
      { name: "Express.js", icon: "devicon-express-original", color: "#000000" },
      { name: "NestJS", icon: "devicon-nestjs-plain", color: "#E0234E" },
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark", color: "#232F3E" },
    ] 
  }
];

export const techMap: Record<string, any> = {};
techStack.forEach(cat => {
    cat.tools.forEach(tool => {
        techMap[tool.name] = tool;
    });
});