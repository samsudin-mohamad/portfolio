import React, { useState } from "react";
import styles from "../../styles/Work.module.css";
import Image from "next/image";
import Modal from "./Modal";
import { projectList } from "../../functions/constant";
import { CgEditBlackPoint } from "react-icons/cg";
import { motion } from "framer-motion";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(null);

  const handleClick = (id) => {
    setShowModal(true);
    setId(id);
  };

  return (
    <section id="projects" className={styles.work}>
      <div className="title">
        <h2>Recent Work</h2>
        <p>My previous projects</p>
      </div>
      <div className={styles.content}>
        {projectList.map((project, index) => (
          <div
            key={index}
            className={styles.workBox}
            onClick={() => handleClick(project.id)}
          >
            <div className={styles.imgBx}>
              <Image
                src={project.imgPath}
                alt={project.imgPath}
                width={600}
                height={400}
              />
            </div>
            <div className={styles.textBx}>
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}

        {projectList
          .filter((project) => project.id === id)
          .map((project) => (
            <Modal
              key={project.id}
              onClose={() => setShowModal(false)}
              show={showModal}
            >
              <div>
                <motion.h1
                  initial={{ x: -1000 }}
                  animate={{ x: 0 }}
                  transition={{ duration: "1", type: "tween" }}
                >
                  {project.title}
                </motion.h1>
              </div>
              <div className={styles.paraBox}>
                <p>
                  <CgEditBlackPoint fontSize={27} /> {project.description}
                </p>
              </div>
            </Modal>
          ))}
      </div>
    </section>
  );
};

export default Projects;
