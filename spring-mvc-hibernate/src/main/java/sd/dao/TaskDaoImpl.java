package sd.dao;

import org.hibernate.Criteria;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import sd.models.Task;

import java.util.List;

@Repository("taskDao")
@Transactional
public class TaskDaoImpl extends AbstractDao<Integer, Task> implements TaskDao {

    public Task findById(int id) {
        return getByKey(id);
    }

    public void saveTask(Task task) {
        persist(task);
    }

    public List<Task> findAllTasks() {
        Criteria criteria = createEntityCriteria();
        return (List<Task>) criteria.list();
    }
}
