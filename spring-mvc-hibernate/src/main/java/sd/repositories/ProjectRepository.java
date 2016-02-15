package sd.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import sd.models.Project;

@Repository
public interface ProjectRepository extends MongoRepository<Project, String> {
}
