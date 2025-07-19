"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Settings,
  User,
  Briefcase,
  MessageSquare,
  Mail,
  Edit,
  Trash2,
  Plus,
  Save,
  Eye,
  BarChart3,
  FileText,
  Download,
  Palette,
  Globe,
  Bell,
  Users,
  TrendingUp,
  Activity,
} from "lucide-react"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Subtle accent gradients - only for highlights */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">Manage your portfolio website content</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-700/50 hover:bg-gray-900/70 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Projects</p>
                  <p className="text-2xl font-bold text-white">12</p>
                  <p className="text-purple-400 text-xs">+2 this month</p>
                </div>
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Briefcase className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-700/50 hover:bg-gray-900/70 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Blog Posts</p>
                  <p className="text-2xl font-bold text-white">8</p>
                  <p className="text-purple-400 text-xs">+1 this week</p>
                </div>
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <FileText className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-700/50 hover:bg-gray-900/70 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Page Views</p>
                  <p className="text-2xl font-bold text-white">2.4K</p>
                  <p className="text-purple-400 text-xs">+15% this month</p>
                </div>
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-700/50 hover:bg-gray-900/70 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Messages</p>
                  <p className="text-2xl font-bold text-white">15</p>
                  <p className="text-purple-400 text-xs">3 unread</p>
                </div>
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-gray-900/50 backdrop-blur-lg border-gray-700/50 p-1">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-purple-500/30 data-[state=active]:text-white text-gray-400 hover:text-white transition-all"
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="profile"
              className="data-[state=active]:bg-purple-500/30 data-[state=active]:text-white text-gray-400 hover:text-white transition-all"
            >
              <User className="w-4 h-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              className="data-[state=active]:bg-purple-500/30 data-[state=active]:text-white text-gray-400 hover:text-white transition-all"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Projects
            </TabsTrigger>
            <TabsTrigger
              value="blog"
              className="data-[state=active]:bg-purple-500/30 data-[state=active]:text-white text-gray-400 hover:text-white transition-all"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Blog
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-purple-500/30 data-[state=active]:text-white text-gray-400 hover:text-white transition-all"
            >
              <Activity className="w-4 h-4 mr-2" />
              Analytics
            </TabsTrigger>
            <TabsTrigger
              value="updates"
              className="data-[state=active]:bg-purple-500/30 data-[state=active]:text-white text-gray-400 hover:text-white transition-all"
            >
              <Bell className="w-4 h-4 mr-2" />
              Updates
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="data-[state=active]:bg-purple-500/30 data-[state=active]:text-white text-gray-400 hover:text-white transition-all"
            >
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-700/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-purple-400" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { action: "New project added", time: "2 hours ago", type: "project", icon: Briefcase },
                    { action: "Blog post published", time: "1 day ago", type: "blog", icon: FileText },
                    { action: "Profile updated", time: "3 days ago", type: "profile", icon: User },
                    { action: "New message received", time: "5 days ago", type: "message", icon: Mail },
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/30"
                    >
                      <div className="p-2 bg-purple-500/20 rounded-lg">
                        <activity.icon className="w-4 h-4 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm">{activity.action}</p>
                        <p className="text-gray-400 text-xs">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-700/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Plus className="w-5 h-5 mr-2 text-purple-400" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start bg-gray-800/50 hover:bg-gray-800/70 text-white border-gray-700/30 backdrop-blur-sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Project
                  </Button>
                  <Button className="w-full justify-start bg-gray-800/50 hover:bg-gray-800/70 text-white border-gray-700/30 backdrop-blur-sm">
                    <Edit className="w-4 h-4 mr-2" />
                    Write Blog Post
                  </Button>
                  <Button className="w-full justify-start bg-gray-800/50 hover:bg-gray-800/70 text-white border-gray-700/30 backdrop-blur-sm">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview Website
                  </Button>
                  <Button className="w-full justify-start bg-gray-800/50 hover:bg-gray-800/70 text-white border-gray-700/30 backdrop-blur-sm">
                    <Settings className="w-4 h-4 mr-2" />
                    Site Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <User className="w-5 h-5 mr-2 text-purple-400" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Full Name</label>
                    <Input
                      defaultValue="Muhammad Husnain Rashid"
                      className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 text-white placeholder-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Title</label>
                    <Input
                      defaultValue="Fullstack Web Developer"
                      className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 text-white placeholder-gray-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-gray-400 text-sm">Bio</label>
                  <Textarea
                    defaultValue="Passionate fullstack developer with expertise in modern web technologies..."
                    className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 text-white placeholder-gray-500"
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Email</label>
                    <Input
                      defaultValue="husnain@example.com"
                      className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 text-white placeholder-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Phone</label>
                    <Input
                      defaultValue="+92 300 1234567"
                      className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 text-white placeholder-gray-500"
                    />
                  </div>
                </div>

                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Manage Projects</h3>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add Project
              </Button>
            </div>

            <div className="grid gap-6">
              {[
                {
                  title: "E-Commerce Platform",
                  description: "Full-stack e-commerce solution",
                  status: "Published",
                  technologies: ["React", "Node.js", "MongoDB"],
                },
                {
                  title: "Task Management App",
                  description: "Collaborative task management",
                  status: "Draft",
                  technologies: ["Next.js", "PostgreSQL"],
                },
                {
                  title: "Social Media Dashboard",
                  description: "Analytics dashboard",
                  status: "Published",
                  technologies: ["React", "Firebase"],
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-lg border-gray-700/50 hover:bg-gray-900/70 transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                          <Badge
                            variant={project.status === "Published" ? "default" : "secondary"}
                            className={
                              project.status === "Published"
                                ? "bg-purple-600/30 text-purple-200 border-purple-500/30"
                                : "bg-gray-700/50 text-gray-300 border-gray-600/30"
                            }
                          >
                            {project.status}
                          </Badge>
                        </div>
                        <p className="text-gray-400 mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-gray-600/50 text-gray-400 bg-gray-800/30"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-600/50 text-gray-400 bg-gray-800/30 hover:bg-gray-800/50 backdrop-blur-sm"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-red-500/30 text-red-400 bg-red-500/10 hover:bg-red-500/20 backdrop-blur-sm"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-700/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-purple-400" />
                    Website Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-800/30 rounded-lg">
                      <p className="text-gray-400 text-sm">Total Visitors</p>
                      <p className="text-2xl font-bold text-white">5,234</p>
                      <p className="text-purple-400 text-xs">+12% from last month</p>
                    </div>
                    <div className="p-4 bg-gray-800/30 rounded-lg">
                      <p className="text-gray-400 text-sm">Bounce Rate</p>
                      <p className="text-2xl font-bold text-white">23%</p>
                      <p className="text-purple-400 text-xs">-5% from last month</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-700/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Users className="w-5 h-5 mr-2 text-purple-400" />
                    User Engagement
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Average Session</span>
                      <span className="text-white">2m 34s</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Pages per Session</span>
                      <span className="text-white">3.2</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Return Visitors</span>
                      <span className="text-white">68%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Updates Tab */}
          <TabsContent value="updates" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">System Updates</h3>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                <Download className="w-4 h-4 mr-2" />
                Check Updates
              </Button>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: "Portfolio System v2.1.0",
                  description: "New dashboard features and performance improvements",
                  date: "2024-01-15",
                  status: "Available",
                },
                {
                  title: "Security Update v2.0.5",
                  description: "Important security patches and bug fixes",
                  date: "2024-01-10",
                  status: "Installed",
                },
                {
                  title: "UI Enhancement v2.0.3",
                  description: "Improved user interface and accessibility",
                  date: "2024-01-05",
                  status: "Installed",
                },
              ].map((update, index) => (
                <Card key={index} className="bg-gray-900/50 backdrop-blur-lg border-gray-700/50">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-1">
                          <h4 className="text-white font-medium">{update.title}</h4>
                          <Badge
                            className={
                              update.status === "Available"
                                ? "bg-purple-600/30 text-purple-200 border-purple-500/30"
                                : "bg-gray-700/50 text-gray-300 border-gray-600/30"
                            }
                          >
                            {update.status}
                          </Badge>
                        </div>
                        <p className="text-gray-400 text-sm mb-1">{update.description}</p>
                        <p className="text-gray-500 text-xs">{update.date}</p>
                      </div>
                      {update.status === "Available" && (
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                          <Download className="w-3 h-3 mr-1" />
                          Install
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-700/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-purple-400" />
                    Website Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Website Name</label>
                    <Input
                      defaultValue="Muhammad Husnain Rashid"
                      className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 text-white placeholder-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Website Description</label>
                    <Textarea
                      defaultValue="Professional portfolio of Muhammad Husnain Rashid"
                      className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 text-white placeholder-gray-500"
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Logo Text</label>
                    <Input
                      defaultValue="HR"
                      className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 text-white placeholder-gray-500"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-700/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Palette className="w-5 h-5 mr-2 text-purple-400" />
                    Theme Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Primary Color</label>
                    <div className="grid grid-cols-4 gap-2">
                      {["bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-violet-500"].map((color) => (
                        <button
                          key={color}
                          className={`w-10 h-10 rounded-lg ${color} border-2 border-transparent hover:border-white/50 transition-colors`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Background Style</label>
                    <select className="w-full p-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-md text-white">
                      <option>Solid Black Background</option>
                      <option>Dark Gray Background</option>
                      <option>Minimal Background</option>
                    </select>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-end">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                <Save className="w-4 h-4 mr-2" />
                Save All Settings
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
