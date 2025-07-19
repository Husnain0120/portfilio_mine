"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  Zap,
  Github,
  PodcastIcon,
} from "lucide-react";

const skills = [
  { name: "React.js", level: 95, icon: Code },
  { name: "Next.js", level: 90, icon: Globe },
  { name: "JavaScript", level: 92, icon: Code },
  { name: "Node.js", level: 88, icon: Server },
  { name: "MongoDB", level: 85, icon: Database },
  { name: "Express.js", level: 87, icon: Server },
  { name: "Git", level: 87, icon: Github },
  { name: "PostMan", level: 80, icon: PodcastIcon },
];

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive websites built with the latest technologies",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform mobile applications using React Native",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Scalable APIs and database architecture",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Fast, optimized applications for better user experience",
  },
];

export function AboutSection() {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer with 3+ years of experience creating
            exceptional digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Story */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">My Journey</h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              I'm a passionate fullstack developer who loves creating digital
              experiences that make a difference. With expertise in modern web
              technologies, I transform complex problems into simple, elegant
              solutions.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              My journey in web development started with curiosity and has
              evolved into a deep passion for building scalable, user-centric
              applications that solve real-world problems.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">3+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right side - Skills */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Technical Skills</h3>
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <skill.icon className="w-5 h-5 text-purple-400" />
                    <span className="font-medium text-white">{skill.name}</span>
                  </div>
                  <span className="text-gray-400 font-medium">
                    {skill.level}%
                  </span>
                </div>
                <Progress
                  value={skill.level}
                  className="h-3 bg-white border border-gray-700 rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-4 text-white">What I Do</h3>
            <p className="text-xl text-gray-400">
              Comprehensive development services to bring your ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="text-center hover:shadow-xl transition-all duration-300 bg-gradient-to-bl from-zinc-900/40  to-purple-800 border-zinc-700 hover:border-zinc-600"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Code Showcase Section */}
        {/* <div className="mt-20 space-y-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-4 text-white">
              Code <span className="gradient-text">Showcase</span>
            </h3>
            <p className="text-xl text-gray-400">
              Sample React.js component from my projects
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm">
                  react-component.jsx
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 text-sm">React.js</span>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-gray-300">
                <code>{`// React.js Task Manager Component
const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        title: newTask,
        completed: false,
        priority: 'medium'
      }]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id 
        ? { ...task, completed: !task.completed } 
        : task
    ));
  };

  return (
    <div className="task-manager">
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add new task..."
      />
      <button onClick={addTask}>Add Task</button>
      
      {tasks.map(task => (
        <div key={task.id} className="task-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <span>{task.title}</span>
        </div>
      ))}
    </div>
  );
};`}</code>
              </pre>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
              <span>Interactive Task Management with React Hooks</span>
              <div className="flex items-center space-x-4">
                <span>useState • useEffect • Event Handling</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
