/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3fY3o4XsQKt
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectLabel, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Card className="mx-auto max-w-xl">
      <CardHeader>
        <CardTitle className="text-2xl">User Registration</CardTitle>
        <CardDescription>Please fill out the form to register.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage alt="User Photo" src="/placeholder-avatar.jpg" />
              <AvatarFallback>UP</AvatarFallback>
            </Avatar>
            <div>
              <Label htmlFor="photo">Photo</Label>
              <Input id="photo" type="file" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Doe" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="id-number">ID Number</Label>
            <Input id="id-number" placeholder="1234567890" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tax-id">Tax ID Number</Label>
            <Input id="tax-id" placeholder="0987654321" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="residential-area">Residential Area</Label>
            <Input id="residential-area" placeholder="1234 Main St" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone-number">Advised Phone Number</Label>
              <Input id="phone-number" placeholder="(123) 456-7890" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="father-phone-number">Father's Phone Number</Label>
              <Input id="father-phone-number" placeholder="(098) 765-4321" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mother-phone-number">Mother's Phone Number</Label>
              <Input id="mother-phone-number" placeholder="(012) 345-6789" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="johndoe@example.com" required type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="academic-level">Academic Level</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Academic Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Levels</SelectLabel>
                  <SelectItem value="undergraduate">Undergraduate</SelectItem>
                  <SelectItem value="postgraduate">Postgraduate</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="field-of-study">Field of Study</Label>
            <Input id="field-of-study" placeholder="Computer Science" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="english-proficiency-level">English Proficiency Level</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select English Proficiency Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Levels</SelectLabel>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" type="submit">
          Register
        </Button>
      </CardFooter>
    </Card>
  )
}

