import uploadIcon from "./assets/images/logo-mark.svg";
import "./Ticket.css";
import TicketBody from "./assets/images/pattern-ticket.svg";
import Avatar from "./assets/images/image-avatar.jpg";
import { useState } from "react";

export default function Ticket({ data }) {
  const [randomTicketNumber] = useState(
    () => `#${Math.floor(10000 + Math.random() * 90000)}`
  );

  return (
    <main>
      <header>
        <img id="upload-icon" src={uploadIcon} alt="logo" />
        <h3>Coding Conf</h3>
      </header>

      <section id="intro">
        <h1 id="intro-h1">
          Congrats, <span id="user-name">{data.name}</span>! Your Ticket is
          ready.
        </h1>
        <p id="intro-p">
          We've emailed your ticket to <span id="user-email">{data.email}</span>{" "}
          and will send updates in the run up to the event.
        </p>
      </section>

      <div className="ticket">
        <img src={TicketBody} alt="TicketBody" className="ticket-body" />
        <div className="ticket-content">
          <header id="ticket-header">
            <div className="ticket-header-left">
              <img id="upload-icon-2" src={uploadIcon} alt="logo" />
            </div>
            <div className="ticket-header-right">
              <h2 id="h2-ticket">Coding Conf</h2>
              <p id="ticket-date-location">Jan 31, 2025 / Austin, TX</p>
            </div>
          </header>

          <div className="ticket-user-info">
            <div className="avatar-column">
              <img
                id="avatar-ticket"
                src={data.avatar || Avatar}
                alt="avatar"
              />
            </div>
            <div className="info-column">
              <h2 id="ticket-name">{data.name}</h2>
              <p id="ticket-git">{data.gitName}</p>
            </div>
          </div>

          <h3 id="ticket-number">{randomTicketNumber}</h3>
        </div>
      </div>
    </main>
  );
}
