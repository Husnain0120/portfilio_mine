"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Send a Message</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">First Name</label>
            <Input placeholder="John" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Last Name</label>
            <Input placeholder="Doe" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <Input type="email" placeholder="john@example.com" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Subject</label>
          <Input placeholder="Project Discussion" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Message</label>
          <Textarea placeholder="Tell me about your project..." rows={5} />
        </div>

        <Button className="w-full" size="lg">
          <Send className="w-4 h-4 mr-2" />
          Send Message
        </Button>
      </CardContent>
    </Card>
  )
}
