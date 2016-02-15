package sd.models;

public class Subrack extends CustomMaterial {
    private String slots;

    public Subrack() {
    }

    public Subrack(String id, String name, String type, String slots) {
        super(id, name, type);
        this.slots = slots;
    }

    public String getSlots() {
        return slots;
    }

    public void setSlots(String slots) {
        this.slots = slots;
    }
}
