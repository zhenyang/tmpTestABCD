package sd.services;

import sd.models.Task;

import java.util.List;

public interface TaskService {

    Task findById(int id);

    void saveTask(Task task);

    List<Task> findAllTasks();
}
