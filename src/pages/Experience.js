import React from "react";
import { DiReact } from "react-icons/di";
import { AiOutlineSolution } from "react-icons/ai";

import "../styles/Experience.css";

const Experience = () => {
  return (
    <div className="service component__space" id="Services">
      <div className="heading">
        <h1 className="heading">
        <DiReact /> <br/>
          Experiencia
          
        </h1>
      </div>
      <div className="container">
        <div div className="row">
          <div className="col__2">
            <div className="service__box pointer">
              <div className="service__meta">
                <p className="service__text service__date">
                  - Febrero 2020 - 2021
                </p>
              </div>
            </div>
          </div>
          <div className="col__2">
            <div className="service__box pointer">
              <h1 className="service__text">Operador de Recepción Digital</h1>
              <p className="p service__text p__color">
                -Consignar archivos en dirección a ctp’s. (computer to plate)
              </p>
              <p className="p service__text p__color">
                -Formación de Plantillas para páginas a rotativas.
              </p>
              <p className="p service__text p__color">
                -Coordinación, Planeación y ejecución del mantenimiento.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div div className="row">
          <div className="col__2">
            <div className="service__box pointer">
              <div className="service__meta">
                <p className="service__text service__date">
                  - Febrero 2017 - 2020
                </p>
              </div>
            </div>
          </div>
          <div className="col__2">
            <div className="service__box pointer">
              <h1 className="service__text">EMPAQUE</h1>
              <p className="p service__text p__color">
                -Destinar pacas para su distribución.
              </p>
              <p className="p service__text p__color">
                -Flejar paquetes para asignar un destino.
              </p>
              <p className="p service__text p__color">
                -configurar denominadas rotativas Regioman y Harris.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="heading">
        <h1 className="heading">
          <AiOutlineSolution />
          Formación Academica
        </h1>
      </div>
      <div className="container">
        <div div className="row">
          <div className="col__2">
            <div className="service__box pointer">
              <div className="service__meta">
                <p className="service__text service__date">
                  - Sep 2013 - Marzo 2018
                </p>
              </div>
            </div>
          </div>
          <div className="col__2">
            <div className="service__box pointer">
              <h1 className="service__text">
                TESI (tecnologico de estudios superiores de ixtapaluca.)
              </h1>
              <p className="compania service__text p__color">
                Ingeniería en Sistemas Computacionales
              </p>
              <p className="p service__text p__color">
                -Organización y Funcionamiento de toda la estructura
                computacional.
              </p>
              <p className="p service__text p__color">
                -Me instruí conociendo los componentes principales en software y
                hardware.
              </p>
              <p className="p service__text p__color">
                - Analizar situaciones con el fin de conocer y solucionar
                complejidades en el sistema de cómputo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div div className="row">
          <div className="col__2">
            <div className="service__box pointer">
              <div className="service__meta">
                <p className="service__text service__date">
                  - Julio 2010 - Agosto 2013
                </p>
              </div>
            </div>
          </div>
          <div className="col__2">
            <div className="service__box pointer">
              <h1 className="service__text">
                COBAO (COLEGIO DE BACHILLERES DEL ESTADO DE OAXACA)
              </h1>
              <p className="p service__text p__color">
                -Aprendí la organización, planeación, y análisis de situaciones
                con el fin de beneficiar a la empresa.
              </p>
              <p className="p service__text p__color">
                -Observación y Supervisión al planear alguna actividad.
              </p>
              <p className="p service__text p__color">
                -Administración, dirección y gestión de empresas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
