import React, { useState, useEffect, useRef } from 'react';
import firebase from 'firebase';
import { Team } from '../Types/Team';
import { Player } from '../Types/Player';
import '../assets/fresh-bootstrap-table.css';

const Template: React.FC = () => {

  return (
    <>
        <div className="content">
          <div className="row">
            <div className="col-12">
              <div className="card card-chart">
              Template
              </div>
            </div>
          </div>
        </div>
        
    </>
    );
}

export default Template;
