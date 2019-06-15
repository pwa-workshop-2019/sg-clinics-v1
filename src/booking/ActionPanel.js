import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from "../common/Atoms";

export default function ActionPanel({onProceed, canProceed}) {
  return (
    <div style={{marginTop: '2.5rem'}}>
      <Link to="/apt-review">
        <Button disabled={!canProceed} primary fluid onClick={onProceed}>
          Book
        </Button>
      </Link>
    </div>
  );
}