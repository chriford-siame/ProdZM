import React from 'react';
import PopOver from './components/PopOver';
import { ScrollArea } from './components/ui/scroll-area';

function App() {
  return (
    <div className="font-bold min-h-screen flex justify-center items-center">
      <div>
        <div className='flex justify-center'>
          <PopOver />
        </div>
        <ScrollArea className="h-[200px] rounded-md border p-4 m-4">
          <p className='text-md'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In similique voluptatibus beatae quis
            ipsam. Dolore blanditiis optio dicta reprehenderit molestias ad eos,
            ipsam. Dolore blanditiis optio dicta reprehenderit molestias ad eos,
            ipsam. Dolore blanditiis optio dicta reprehenderit molestias ad eos,
            ipsam. Dolore blanditiis optio dicta reprehenderit molestias ad eos,
            ipsam. Dolore blanditiis optio dicta reprehenderit molestias ad eos,
            ipsam. Dolore blanditiis optio dicta reprehenderit molestias ad eos,
            ipsam. Dolore blanditiis optio dicta reprehenderit molestias ad eos,
            ipsam. Dolore blanditiis optio dicta reprehenderit molestias ad eos,
            ipsam. Dolore blanditiis optio dicta reprehenderit molestias ad eos,
            ipsam. Dolore blanditiis optio dicta reprehenderit molestias ad eos,
            ipsam. Dolore blanditiis optio dicta reprehenderit molestias ad eos,
            ipsam. Dolore blanditiis optio dicta reprehenderit molestias ad eos,
            ipsam. Dolore blanditiis optio dicta reprehenderit molestias ad eos,
            ipsam. Dolore blanditiis optio dicta reprehenderit molestias ad eos,
            ipsam. Dolore blanditiis optio dicta reprehenderit molestias ad eos,
            ipsam. Dolore blanditiis optio dicta reprehenderit molestias ad eos,
            ipsam. Dolore blanditiis optio dicta reprehenderit molestias ad eos,
            suscipit enim ab beatae. Sit veniam aperiam debitis!
          </p>
        </ScrollArea>
      </div>

    </div>
  );
}

export default App;
