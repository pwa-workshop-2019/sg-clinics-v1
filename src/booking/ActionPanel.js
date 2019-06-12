import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from "../common/Atoms";

export default function ActionPanel(props) {
  return (
    <div style={{marginTop: '2.5rem'}}>
      <Link to="/apt-review">
      <Button primary fluid>
        Book
      </Button>
      </Link>
    </div>
  );
}