// src/components/Chat.js
import React from 'react';
import { url } from '@/components/config.jsx';

function Chat(){
  return (<div>
    <div className="flex gap-4 w-full h-[100vh]">
  <div className="w-1/2 rounded overflow-hidden">
    <embed
      src={`${url}/view/696ec0db740876007820d083#page=1&view=FitH&toolbar=0&navpanes=0`}
      type="application/pdf"
      className="w-full h-full"
    />
  </div>

  <div className="w-1/2">
    {/* questions section */}
  </div>
</div>
  </div>)
 }

export default Chat;

