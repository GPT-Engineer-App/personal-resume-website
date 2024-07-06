import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="container mx-auto p-4 space-y-8">
      {/* Header Section */}
      <header className="flex items-center space-x-4">
        <img src="/placeholder.svg" alt="Profile" className="mx-auto object-cover w-24 h-24 rounded-full" />
        <h1 className="text-4xl font-bold">John Doe</h1>
      </header>

      <Separator />

      {/* About Me Section */}
      <section id="about-me">
        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Hello! I'm John Doe, a passionate software developer with a knack for creating efficient and scalable web applications. With a background in computer science and several years of experience in the industry, I have honed my skills in both frontend and backend development.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Education Background Section */}
      <section id="education">
        <Card>
          <CardHeader>
            <CardTitle>Education Background</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>Bachelor of Science in Computer Science</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>University of Technology</p>
                    <p>2015 - 2019</p>
                  </CardContent>
                </Card>
              </li>
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>Master of Science in Software Engineering</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Institute of Advanced Studies</p>
                    <p>2019 - 2021</p>
                  </CardContent>
                </Card>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Work Experience Section */}
      <section id="work-experience">
        <Card>
          <CardHeader>
            <CardTitle>Work Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>Software Developer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Tech Solutions Inc.</p>
                    <p>2021 - Present</p>
                    <p>Key Responsibilities:</p>
                    <ul className="list-disc list-inside">
                      <li>Developing and maintaining web applications</li>
                      <li>Collaborating with cross-functional teams</li>
                      <li>Implementing new features based on client requirements</li>
                    </ul>
                  </CardContent>
                </Card>
              </li>
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>Junior Developer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Web Innovations Ltd.</p>
                    <p>2019 - 2021</p>
                    <p>Key Responsibilities:</p>
                    <ul className="list-disc list-inside">
                      <li>Assisting in the development of web applications</li>
                      <li>Writing clean and efficient code</li>
                      <li>Participating in code reviews</li>
                    </ul>
                  </CardContent>
                </Card>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Project Showcase Section */}
      <section id="projects">
        <Card>
          <CardHeader>
            <CardTitle>Project Showcase</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>Project Management Tool</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>A web-based project management tool to help teams collaborate and manage tasks efficiently.</p>
                    <p>Technologies Used: React, Node.js, MongoDB</p>
                    <img src="/placeholder.svg" alt="Project Screenshot" className="mx-auto object-cover w-full h-[200px]" />
                  </CardContent>
                </Card>
              </li>
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>E-commerce Platform</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>An e-commerce platform that provides a seamless shopping experience for users.</p>
                    <p>Technologies Used: Next.js, Express, PostgreSQL</p>
                    <img src="/placeholder.svg" alt="Project Screenshot" className="mx-auto object-cover w-full h-[200px]" />
                  </CardContent>
                </Card>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Contact Form Section */}
      <section id="contact">
        <Card>
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <Input id="name" name="name" type="text" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <Input id="subject" name="subject" type="text" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <Textarea id="message" name="message" rows="4" required />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;