package sd.dao;

import sd.models.Task;

import java.util.List;

public interface TaskDao {

    Task findById(int id);

    void saveTask(Task task);

    List<Task> findAllTasks();
}
