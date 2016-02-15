package sd.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import sd.models.Project;
import sd.repositories.ProjectRepository;

import java.util.List;

@RestController
@RequestMapping(value = "/projects")
public class ProjectsApiController {

    @Autowired
    ProjectRepository repository;

    @RequestMapping(method = RequestMethod.GET)
    public List<Project> index() {
//        return Collections.emptyList();
        return repository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Project get(@PathVariable String id) {
        return repository.findOne(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Project create(@RequestBody Project project) {
        System.out.println(project);
        return repository.insert(project);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.POST)
    public Project update(@PathVariable String id, @RequestBody Project project) {
        if (!repository.exists(id)) {
            return null;
        }
        return repository.save(project);
    }
}
