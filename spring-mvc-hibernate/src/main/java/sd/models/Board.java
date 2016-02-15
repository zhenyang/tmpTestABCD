package sd.models;

public class Board extends CustomMaterial {
    private String parentId;

    public Board() {
    }

    public Board(String id, String name, String type, String parentId) {
        super(id, name, type);
        this.parentId = parentId;
    }

    public String getParentId() {
        return parentId;
    }
    public void setParentId(String parentId) {
        this.parentId = parentId;
    }
}
