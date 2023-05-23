import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Flight} from "./Flight";
import {Class} from "./Class";
import {Seat} from "./Seat";

@Entity()
export class Row {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "varchar", length: 1})
    name: string;

    @ManyToOne(() => Flight, (flight) => flight.rows)
    flight: number;

    @Column()
    price: number;

    @ManyToOne(() => Class)
    class: number;

    @OneToMany(() => Seat, (seat) => seat.row)
    seats: Seat[]
}