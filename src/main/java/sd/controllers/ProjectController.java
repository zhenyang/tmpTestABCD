package sd.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import sd.models.Project;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(value = "/projects")
public class ProjectController {

    @RequestMapping(method = RequestMethod.GET)
    public List<Project> index() {
        return Arrays.asList(new Project(12, "Test Proj", "Pending"));
    }

    @RequestMapping(value = "/{id}")
    public Project get(@PathVariable int id) {
        return new Project(12, "Test Proj", "Pending");
    }
}
