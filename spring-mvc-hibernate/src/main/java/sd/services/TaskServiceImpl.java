package sd.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sd.dao.TaskDao;
import sd.models.Task;

import java.util.List;

@Service("taskService")
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskDao dao;

    public Task findById(int id) {
        return dao.findById(id);
    }

    public void saveTask(Task task) {
        dao.saveTask(task);
    }

    public List<Task> findAllTasks() {
        return dao.findAllTasks();
    }

}
