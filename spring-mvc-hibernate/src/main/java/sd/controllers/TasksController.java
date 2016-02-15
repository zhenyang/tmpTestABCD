package sd.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/tasks")
public class TasksController {

//    @Autowired
//    TaskService service;

    @RequestMapping(value = "/new")
    public String add(Model model) {
//        model.addAttribute("tasks", service.findAllTasks());
        return "tasks/new";
    }
}
