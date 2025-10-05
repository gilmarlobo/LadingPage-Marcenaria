import React from "react";
import { motion } from "framer-motion";

export default function GallerySection() {
  const projects = [
    {
      title: "Cozinha Planejada Moderna",
      category: "Residencial",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
    },
    {
      title: "Closet de Luxo",
      category: "Residencial",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80"
    },
    {
      title: "Sala de Estar Rústica",
      category: "Móveis",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
    },
    {
      title: "Escritório Corporativo",
      category: "Comercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    },
    {
      title: "Mesa de Jantar Artesanal",
      category: "Móveis",
      image: "https://images.unsplash.com/photo-1617098900591-3f732362d38c?w=800&q=80"
    },
    {
      title: "Estante de Madeira Nobre",
      category: "Residencial",
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80"
    }
  ];

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider">
            Nosso Portfólio
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900">
            Projetos que Inspiram
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos nossos trabalhos mais recentes e apaixone-se pela arte da marcenaria
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}