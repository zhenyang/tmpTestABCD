package sd.models;

import java.util.List;

public class CustomModel {
    private String id;
    private String name;
    private String status;
    private List<CustomMaterial> materials;

    public CustomModel(String id, String name, String status, List<CustomMaterial> materials) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.materials = materials;
    }

    public CustomModel() {
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

    public List<CustomMaterial> getMaterials() {
        return materials;
    }

    public void setMaterials(List<CustomMaterial> materials) {
        this.materials = materials;
    }
}
