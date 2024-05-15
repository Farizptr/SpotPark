export default function Complete() {
    return (
      <div 
        className="flex flex-col min-h-screen bg-white"
        style={{
            backgroundImage: `url('/car.png')`, // Replace '/path/to/your/image.jpg' with the actual path to your image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
      >
        <header className="flex items-center p-8">
          <img src="/logo_text.png" alt="SpotPark Logo" className="h-10 w-auto" />
        </header>
        
        <main className="flex flex-col items-center w-full p-4 mt-28">
          <h2 className="text-xl font-bold">Your parking spot is secured!</h2>
          
          
        </main>
      </div>
    );
  }
  