import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create order details
    const orderDetails = {
      customer: formData,
      items: cart.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        total: item.price * item.quantity,
      })),
      total: getTotalPrice(),
    };

    // Format email content
    const emailBody = `
New Order Received!

Customer Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}
${formData.notes ? `Notes: ${formData.notes}` : ''}

Order Items:
${orderDetails.items.map(item => 
  `- ${item.name} x${item.quantity} @ £${item.price.toFixed(2)} = £${item.total.toFixed(2)}`
).join('\n')}

Total: £${orderDetails.total.toFixed(2)}
    `;

    // For now, we'll log to console and show success
    // In production, this would send an actual email
    console.log("Order Details:", orderDetails);
    console.log("Email Body:", emailBody);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Order placed successfully! You will receive a confirmation email shortly.");
      clearCart();
      navigate("/");
    }, 1500);
  };

  if (cart.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-2xl">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>Review your items</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.name} x{item.quantity}
                  </span>
                  <span className="font-semibold">
                    £{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">£{getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Details</CardTitle>
              <CardDescription>
                We'll email you the order details and payment instructions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Delivery Address *</Label>
                  <Textarea
                    id="address"
                    required
                    rows={3}
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Order Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    rows={2}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    placeholder="Any special requests or delivery instructions..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Placing Order..." : "Place Order"}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  You will receive an email with payment instructions after placing your
                  order.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
