package sd.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "projects")
public class Project {

    @Id
    private String id;
    private String name;
    private String status;
    private List<CustomModel> models;

    public Project() {
    }

    public Project(String id, String name, String status, List<CustomModel> models) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.models = models;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<CustomModel> getModels() {
        return models;
    }

    public void setModels(List<CustomModel> models) {
        this.models = models;
    }
}
