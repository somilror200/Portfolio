import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => (
  <div className="shell not-found">
    <span className="mono" style={{ color: "var(--primary)", fontSize: "var(--text-2xl)" }}>
      404
    </span>
    <h1 style={{ fontSize: "var(--text-2xl)" }}>Page not found</h1>
    <p style={{ color: "var(--text-muted)" }}>
      That route doesn't exist — maybe a typo, maybe a bug I haven't shipped yet.
    </p>
    <Link to="/" className="btn btn-primary">
      <Home size={16} /> Back home
    </Link>
  </div>
);

export default NotFound;
