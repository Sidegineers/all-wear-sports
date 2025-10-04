const Footer = () => {
  return (
    <footer className="border-t bg-muted/50 mt-auto">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">All Wear Sports</h3>
            <p className="text-sm text-muted-foreground">
              Your one-stop shop for sports cricket equipment, accessories, and jerseys.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>About Us</li>
              <li>Contact</li>
              <li>Shipping Policy</li>
              <li>Returns & Exchanges</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Cricket Bats</li>
              <li>Protective Gear</li>
              <li>Team Jerseys</li>
              <li>Training Equipment</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 All Wear Sports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
