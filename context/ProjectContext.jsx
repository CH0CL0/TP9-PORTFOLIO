import React, { createContext, useState } from 'react';

// Create the context
export const ProjectContext = createContext();

const fakeProjects = [
    {
      title: "To do list",
      description: "Puedes crear y sincronizar fácilmente tus listas de tareas entre varios dispositivos para tenerlas disponibles desde una computadora",
      imageUrl: "",
      date: "31/08/20203",
      url: "https://github.com/CH0CL0/TODOLISTDAI",
      favorito: false,

    },
    {
      title: "Eco 1%",
      description: "Una pagina donde puedes competir con tus amigos para quien sabe mas sobre la contaminacion",
      imageUrl: "https://tusclicks.com/blog/wp-content/uploads/2019/10/hero-design-web.jpg",
      date: "02/10/2023",
      url: "https://github.com/CH0CL0/Eco1",
      favorito: false,

    },
    {
      title: "Challenge",
      description: "descripcion",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk39xK56uiRJKkNYBSLPCVi2O1VeOsJsBFYA&usqp=CAU",
      date: "07/11/2023",
      url: "https://github.com/MateoGuevaraAlvarez/Challenge-react-native",
      favorito: false,

    },

    // Agrega más proyectos según sea necesario
  ];



// Create a provider component
export const ProjectProvider = ({ children }) => {
    // Set the initial state with the fakeProjects data
    const [projects, setProjects] = useState(localStorage.getItem("projects") ? JSON.parse(localStorage.getItem("projects")) : fakeProjects);
      return (
        <ProjectContext.Provider value={{ projects,setProjects}}>
          {children}
        </ProjectContext.Provider>
      );
};