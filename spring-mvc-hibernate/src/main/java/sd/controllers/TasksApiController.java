package sd.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import sd.models.Task;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(value = "/tasks")
public class TasksApiController {

    @RequestMapping(method = RequestMethod.GET)
    public List<Task> index() {
        return Arrays.asList(new Task(12, "Test Task", "Pending"));
    }

    @RequestMapping(value = "/{id}")
    public Task get(@PathVariable int id) {
        return new Task(12, "Test Task", "Pending");
    }

}
