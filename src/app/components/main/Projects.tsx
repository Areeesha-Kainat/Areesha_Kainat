import React from "react";
import ProjectCard from "./sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">

        <ProjectCard
          src="/chocolates .png"
          title="Chocolate Coffee Website"
          description="The features include eye-catching animations, creating an engaging experience to showcase delicious chocolate coffee products"
        />
                <ProjectCard
          src="/movie.png"
          title="Movie Booking Website"
          description="The Movie Ticket Booking System streamlines ticket purchases, cancellations, and inquiries for recent films online."
        />
        <ProjectCard
          src="/olympics.png"
          title="Olympic Website"
          description=" The Static Olympic Website offers comprehensive information about the Olympics with organized pages and navigation."
        />
      </div>
      <br /> <br />
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        
      <ProjectCard
          src="/university.png"
          title="Interactive University Website"
          description="The Static University Website provides essential information with organized pages and a user-friendly layout."
        />
                <ProjectCard
          src="/ports.png"
          title="Portfolio Website"
          description="The eye-catching portfolio website showcases my skills, projects, and experiences with a stunning design."
        />
          <ProjectCard
          src="/egreeting.png"
          title="E-Greeting Website"
          description="The dynamic e-greeting website allows users to create and send personalized greetings for any occasion."
        />
       
      </div>
      <br /> <br />
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">

        <ProjectCard
          src="/Power BI Dasboard.png"
          title="Spotify Power BI Dashboard"
          description="The Power BI Spotify Dashboard visualizes listening habits, showcasing top tracks and favorite artists interactively."
        />
        <ProjectCard
          src="/gaming.png"
          title="Joystick Web Design"
          description="The Joystick web design in Figma showcases my UI/UX skills with an intuitive, engaging layout."
        />
         <ProjectCard
          src="/prime video dashboard.png"
          title=" PrimeVideo Power BI Dashboard"
          description="The Power BI Prime Video Dashboard visualizes viewing habits, highlighting top shows and favorite movies interactively."
        />

      </div>
      <br /> <br />
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
          src="/nike.png"
          title="Nike Shoe Store Design"
          description="The Nike store design in Figma highlights my UI/UX expertise with a sleek, user-friendly interface."
        />
         <ProjectCard
          src="/song.png"
          title="Song Web Design"
          description="The Figma song web design showcases my UI/UX abilities with an engaging and colorful interface."
        />
        <ProjectCard
          src="/insta.png"
          title="Instagram Web Design"
          description="The Instagram website design in Figma demonstrates my UI/UX proficiency with a modern, user-friendly experience."
        />
        
      </div>
    </div>
  );
};

export default Projects;